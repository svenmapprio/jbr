import { Work } from "~/utils/types";

export const useWork = async (id: number) => {
    const {findOne} = useStrapi<Work>();

    const findData = await findOne('works', id, {populate: ['work_images', 'work_images.image']});

    return findData;
}