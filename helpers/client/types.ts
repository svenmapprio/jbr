export type WorkDetails = {
  id: number;
  name: string | null;
  sections: {
    id: number;
    description: string | null;
    textPosition: string | null;
    images: {
      id: number;
      url: string | null;
      width: number | null;
      height: number | null;
    }[];
  }[];
};

export type WorkItem = {
  id: number;
  name: string | null;
};
