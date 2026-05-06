import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface StatCardProps {
  icon: LucideIcon;
  count: string | number;
  label: string;
  color?: string;
}

export function StatCard({ icon: Icon, count, label, color = "primary" }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden border-none shadow-soft hover:shadow-elegant transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-2xl bg-${color}/10 text-${color}`}>
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">{label}</p>
              <h3 className="text-2xl font-bold mt-1 tracking-tight">{count}</h3>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
