export type ExamId = "school" | "upsc" | "jee" | "neet";

export function examFromPathname(pathname: string): ExamId | "agnostic" {
  const p = pathname.replace(/\/$/, "") || "/";
  if (p === "/" || p.startsWith("/school")) return "school";
  if (p.startsWith("/upsc")) return "upsc";
  if (p.startsWith("/jee")) return "jee";
  if (p.startsWith("/neet")) return "neet";
  return "agnostic";
}

export function resolveExam(
  pathname: string,
  prop?: ExamId | "agnostic"
): ExamId {
  if (prop && prop !== "agnostic") return prop;
  const fromPath = examFromPathname(pathname);
  if (fromPath !== "agnostic") return fromPath;
  return "school";
}
