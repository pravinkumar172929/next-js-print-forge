export type RootLayoutPros = Readonly<{
  children: React.ReactNode;
}>;

export type Model = {
  id: number;
  name: string;
  description: string;
  likes: number;
  image: string;
  category: string;
  dateAdded: string;
};

export type ModelCardProps = {
  model: Model;
};

export type PillProps = {
  children: React.ReactNode;
};

export type ModelDetailsProps = {
  params: Promise<{ id: string }>;
};

export type CategoryPagePros = {
  params: Promise<{ categoryName: string }>;
};

export type Category = {
  displayName: string;
  slug: string;
};
