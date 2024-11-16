import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
/* reducers */
import persons from "./entities/persons/persons.reducer";
import parties from "./entities/parties/parties.reducer";
/* sagas */
import personSaga from "./entities/persons/persons.sagas";
import partySaga from "./entities/parties/parties.sagas";

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: {
      persons,
      parties,
    },
    middleware: (gDM) => gDM().concat(sagaMiddleware),
  });

  sagaMiddleware.run(personSaga);
  sagaMiddleware.run(partySaga);

  return store;
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
