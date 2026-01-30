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
  className?: string;
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

export type ModelsLayoutProps = {
  children: React.ReactNode;
};

export type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
};

export type ModelGridProps = {
  models: Model[];
  title: string;
};

export type ModelsListProps = {
  searchParams: {
    query?: string;
  };
};
