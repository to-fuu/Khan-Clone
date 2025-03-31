import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background padding-navbar">
      <div className="flex flex-col items-center text-center pt-16 lg:pt-32 pb-24 container max-w-8xl mx-auto gap-6">
        <h1 className="font-medium text-4xl lg:text-5xl">
          Terms and Conditions
        </h1>
      </div>

      <section className="pb-16  lg:pt-16 max-w-8xl mx-auto [&_p]:mb-12 container px-8">
        <div className="grid lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2 order-2 lg:order-1 prose max-w-none prose-headings:font-medium">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
              reprehenderit vero quaerat facilis et, vel quisquam debitis, id
              quis dignissimos beatae sapiente labore ratione! Doloribus rem,
              consectetur explic
            </p>

            <h2>About 528Prep Products and Services</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
              reprehenderit vero quaerat facilis et, vel quisquam debitis, id
              quis dignissimos beatae sapiente labore ratione! Doloribus rem,
              consectetur explicabo cupiditate omnis est esse exercitationem
              ipsum eveniet error nobis praesentium provident illum tenetur,
              voluptates totam aperiam saepe nam aut, necessitatibus veniam
              culpa dignissimos suscipit odit? Voluptates.
            </p>

            <h2>Applicability</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos deleniti quasi, quibusdam a porro unde dolores atque,
              sunt cupiditate accusantium doloribus odit at voluptatum ullam
              minus? Nihil, ex a incidunt porro assumenda doloremque illum,
              ipsam molestias quo nam, est sapiente quidem vel dignissimos.
              Aperiam nam veritatis explicabo exercitationem, obcaecati veniam.
              Voluptate tempore quaerat quod eius, mollitia exercitationem,
              minus corrupti aut commodi culpa sequi voluptatem ullam
              voluptatibus? Assumenda magni doloribus facilis vero accusantium
              consequatur nulla, distinctio eius corrupti quia saepe perferendis
              fugit quam officia quae alias quasi et rerum aliquid ullam
              architecto atque, minus nostrum voluptatum! Explicabo incidunt
              placeat odio maxime corrupti a illo laudantium consectetur. Error
              nobis dolores dicta saepe quo veritatis laborum, eos ut quasi
              nesciunt, minus aut libero placeat officia, omnis similique rerum
              expedita provident possimus.
            </p>

            <h2>Information We Collect</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate necessitatibus nulla excepturi laudantium eveniet nemo
              officiis ullam, laboriosam nam, blanditiis beatae, perferendis
              quisquam. Velit eos suscipit, soluta eligendi maiores nihil,
              adipisci maxime sunt nulla, temporibus id. Explicabo doloremque
              maiores aliquid accusantium tempora ducimus eveniet ab.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              aliquid, a voluptas quo fugiat ipsam optio quas pariatur suscipit
              consectetur blanditiis repellat illo placeat explicabo
              repudiandae, tempore soluta autem veritatis ipsa. Eos ratione
              provident sed labore unde facilis, error suscipit earum quis ipsum
              ex architecto dolores quod sequi beatae natus aut facere assumenda
              repudiandae, doloremque, accusamus exercitationem id? Rem, magnam.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="font-medium text-base mb-4">On this page</div>

            <nav className="text-sm">
              <ul className="flex flex-col gap-2">
                <li>About 528Prep</li>
                <li>Applicability</li>
                <li>Information We Collect</li>
                <li>Third-Party Services</li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}
