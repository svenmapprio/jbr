import { jsonArrayFrom } from "kysely/helpers/postgres";
import { db } from "~/helpers/server/db";

export default defineEventHandler(async (event) => {
  const works = await db
    .selectFrom("works as w")
    .select((s) => [
      "id",
      "name",
      "description",
      jsonArrayFrom(
        s
          .selectFrom("workImagesWorkLinks as wiw")
          .innerJoin("workImages as wi", (j) =>
            j.onRef("wi.id", "=", "wiw.workImageId")
          )
          .select((ss) => [
            "wi.id",
            "wi.textPosition",
            "wi.description",
            jsonArrayFrom(
              ss
                .selectFrom("filesRelatedMorphs as frm")
                .innerJoin("files as f", (j) =>
                  j.onRef("f.id", "=", "frm.fileId")
                )
                .select(["f.id", "f.url", "f.formats", "f.width", "f.height"])
                .whereRef("frm.relatedId", "=", "wi.id")
                .where("frm.relatedType", "=", "api::work-image.work-image")
                .orderBy("frm.order")
            ).as("images"),
          ])
          .whereRef("wiw.workId", "=", "w.id")
      ).as("sections"),
    ])
    .where("w.type", "=", "participation")
    .execute();

  return works;
});
