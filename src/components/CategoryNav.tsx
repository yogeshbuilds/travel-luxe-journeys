import { Heart, Mountain, Gem } from "lucide-react";

const categories = [
  { name: "Luxury", icon: Gem },
  { name: "Honeymoon", icon: Heart },
  { name: "Adventure", icon: Mountain },
];

const CategoryNav = () => {
  return (
    <section className="bg-muted py-6">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 justify-center flex-wrap">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="flex items-center gap-2 px-6 py-3 bg-background rounded-full shadow-soft hover:shadow-medium transition-all cursor-default"
              >
                <Icon className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">{category.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryNav;
