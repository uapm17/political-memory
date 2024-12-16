const crypto = require("crypto");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

const runMirgation = async () => {
  const personsSnapshot = await db.collection("persons").get();

  console.log(`===> Start. Total persons: ${personsSnapshot.docs.length}`);
  const batches = [];
  let counter = 0;
  let batch = db.batch();

  personsSnapshot.docs.forEach(async (personDoc) => {
    if (counter >= 399) {
      batches.push(batch);
      batch = db.batch();
      counter = 0;
    }

    batch.update(personDoc.ref, {
      videos: [],
    });
    counter += 1;
  });

  if (counter > 0) {
    batches.push(batch);
  }

  const batchesChain = batches.reduce(
    (acc, b, index) =>
      acc.then(async () => {
        const startTime = new Date();
        await b.commit();
        const endTime = new Date();
        const diff = (endTime - startTime) / 1000;
        console.log(`Batch #${index}: ${diff}s`);
      }),
    Promise.resolve()
  );

  await batchesChain;
};

// runMirgation();
