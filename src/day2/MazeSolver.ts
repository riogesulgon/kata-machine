let dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

export function walk(maze: string[], wall: string, curr: Point, path: Point[], seen: boolean[][], end: Point): boolean {
  // Base cases
  // 1. end
  // 2. seen
  // 3. out of bounds
  // 4. wall
  if (curr.x == end.x && curr.y == end.y) {
    path.push(curr);
    return true;
  }

  if (curr.y < 0 || curr.y > maze.length || 
      curr.x < 0 || curr.x > maze[0].length) {
      return false;
  }

  if (seen[curr.y][curr.x]) {
    return false;
  }

  if (maze[curr.y][curr.x] === wall) {
    return false;
  }

  // recurse
  //   - pre
  //   - recurse
  //   - post
  seen[curr.y][curr.x] = true;
  path.push(curr);
  for (let i = 0; i < dir.length; i++) {
    const [y, x] = dir[i];
    let ret = walk(maze, wall, 
         { x: curr.x + x, y: curr.y + y},
         path, seen, end);
    if (ret) {
      return true;
    }
  }
  path.pop();
  return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
  let seen:boolean[][] = [];
  let path:Point[] = [];
  for (let i = 0; i < maze[0].length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }
  walk(maze, wall, start, path, seen, end);
  return path;
}
