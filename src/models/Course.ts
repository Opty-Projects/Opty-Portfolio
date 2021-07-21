export default interface Course {
  readonly Name: string;
  readonly Href: string;
  readonly Grade: number;
  readonly ECTS: number;
  readonly Period: string;
  readonly Year: string;
  readonly Github?: string;
  readonly Branch: string;
}
