import { jsonArrayFrom } from "kysely/helpers/postgres";
import { db } from "~/helpers/server/db";

export default defineEventHandler(async (event) => {
  const info = await db
    .selectFrom("personals as p")
    .select((s) => [
      "p.firstName",
      "p.lastName",
      "p.bio",
      "p.email",
      "p.address",
      "p.phone",
      "p.email",
      jsonArrayFrom(
        s.selectFrom("webLinks as wl").select(["wl.label", "wl.link"])
      ).as("links"),
      jsonArrayFrom(
        s
          .selectFrom("activities as a")
          .select(["a.from", "a.to", "a.text"])
          .where("a.type", "=", "education")
      ).as("education"),
      jsonArrayFrom(
        s
          .selectFrom("activities as a")
          .select(["a.from", "a.to", "a.text"])
          .where("a.type", "=", "project")
      ).as("projects"),
      jsonArrayFrom(
        s
          .selectFrom("activities as a")
          .select(["a.from", "a.to", "a.text"])
          .where("a.type", "=", "residency")
      ).as("residencies"),
    ])
    .executeTakeFirstOrThrow();

  return info;
});
