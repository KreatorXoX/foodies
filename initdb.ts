const sql = require("better-sqlite3");
const db = sql("meals.db");

const dummyMeals = [
  {
    title: "Salmon Salad",
    slug: "salmon-salad",
    image:
      "https://res.cloudinary.com/dinhhwb9x/image/upload/v1725624425/meals/uanlomvoj55bzkl1wmcu.png",
    public_id: "uanlomvoj55bzkl1wmcu",
    summary:
      "A light and refreshing salad with smoked salmon pieces, ripe tomatoes, fresh basil, and a tangy vinaigrette.",
    instructions: `
      1. Prepare the salmon:
         Cut smoked salmon into bite-sized pieces.

      2. Prepare the tomatoes:
        Slice fresh tomatoes and arrange them on a plate.
    
      3. Add herbs and seasoning:
         Sprinkle chopped basil, salt, and pepper over the tomatoes.
    
      4. Dress the salad:
         Drizzle with olive oil and balsamic vinegar.
    
      5. Serve:
         Enjoy this simple, flavorful salad as a side dish or light meal.
    `,
    creator: "Gorkem Gocer",
    creator_email: "gorkem@example.com",
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,       
       public_id TEXT NOT NULL,       
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,         
         @public_id,         
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();
