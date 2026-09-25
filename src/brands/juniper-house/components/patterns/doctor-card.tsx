import { cn } from "@/lib/cn";
import type { Doctor } from "../../content";
import { ArchImage } from "../ui/arch-image";

type DoctorCardProps = {
  doctor: Doctor;
  className?: string;
};

export function DoctorCard({ doctor, className }: DoctorCardProps) {
  return (
    <article className={cn("group flex flex-col gap-3 md:gap-[18px]", className)}>
      <ArchImage
        src={doctor.image}
        alt={doctor.name}
        ground={doctor.ground}
        position="center 30%"
        zoomOnHover
        sizes="(min-width: 1024px) 282px, (min-width: 768px) 45vw, 250px"
        className="h-[290px] md:h-[300px]"
      />
      <div className="flex flex-col gap-3 md:gap-1.5">
        <h3 className="serif text-[22px] leading-[1.2] font-medium-serif md:text-h3">{doctor.name}</h3>
        <p className="text-xs font-semibold tracking-[0.08em] text-terracotta-ink uppercase md:text-[13px]">
          {doctor.role}
        </p>
      </div>
      <p className="text-[14.5px] leading-normal text-moss md:text-[15.5px] md:leading-[1.6]">{doctor.bio}</p>
    </article>
  );
}
