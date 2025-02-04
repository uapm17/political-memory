import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <h1 className={title({ class: "mb-8" })}>About</h1>
      <section className="flex flex-col bg-gray-100 p-8 rounded-md">
        <p className="p-2 text-left">
          Ми всі любимо Україну. Прекрасні люди, гарна природа, клімат та
          величезний потенціал.
        </p>
        <p className="p-2 text-left">
          🇺🇦 Незалежними ми стали зовсім нещодавно і політична свідомість у
          громадян лише формується. Дуже важливо на цьому етапі всідомо і уважно
          обирати людей на керівні посади в країні. Нажаль, все настільки
          бурхливо розвивається, що часом важко згадати, що було минулого
          місяця. Таким чином в історії губляться достойні та недостойні вчинки
          багатьох державних діячів.
        </p>
        <p className="p-2 text-left">
          Цей проєкт покликаний дати всім нам інструмент для прийняття більш
          усвідомлених рішень ❤️
        </p>
      </section>
    </div>
  );
}
