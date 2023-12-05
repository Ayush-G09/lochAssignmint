export type Testimonial = {
  name: string;
  title: string;
  content: string;
};

export type CardType = {
  icon: React.ReactNode;
  saved: boolean;
  content: string;
  children: React.ReactNode;
};
