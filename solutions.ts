function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier === undefined) {
    return value * 2;
  }
  return value * multiplier;
}

function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean" && value) {
    return "Active";
  } else {
    return "Inactive";
  }
}

function formatCoordinate(coordinate: readonly [number, number, string]): string {
  const latitude = coordinate[0];
  const longitude = coordinate[1];
  const locationName = coordinate[2];

  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let combined: T[] = [];

  for (let i = 0; i < arrays.length; i++) {
    combined = combined.concat(arrays[i]);
  }

  return combined;
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  const result: Course[] = [];

  for (let i = 0; i < courses.length; i++) {
    const course = courses[i];

    if (course.isPublished && course.students >= minStudents) {
      result.push(course);
    }
  }

  return result;
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  const values: T[K][] = [];

  for (let i = 0; i < items.length; i++) {
    values.push(items[i][key]);
  }

  return values;
}

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

async function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
    } else {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    }
  });
}
