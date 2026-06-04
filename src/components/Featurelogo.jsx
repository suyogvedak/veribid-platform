"use client";

export default function FeatureLogo({
  icon,
  title,
}) {
  return (
    <div
      className="
        w-20
        h-20
        rounded-3xl
        flex
        items-center
        justify-center
        bg-gradient-to-br
        from-violet-600
        to-fuchsia-600
        text-4xl
        shadow-[0_0_35px_rgba(168,85,247,0.45)]
      "
    >
      {icon}
    </div>
  );
}