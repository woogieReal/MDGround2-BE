export class CreateTreeDto {
  id: number;
  type: number; // 10: folder, 20: file
  name: string;
  content: string;
  parent: number;
  user: string;
}
