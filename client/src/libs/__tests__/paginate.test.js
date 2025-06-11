import { paginate } from "../paginate";

const items = Array.from({ length: 10 }, (_, i) => i + 1); // [1..10]

describe("paginate()", () => {
  test("returns correct items for page 1, size 4", () => {
    const { pageItems, totalPages } = paginate(items, 1, 4);
    expect(pageItems).toEqual([1, 2, 3, 4]);
    expect(totalPages).toBe(3);
  });

  test("returns correct items for last page", () => {
    const { pageItems } = paginate(items, 3, 4);
    expect(pageItems).toEqual([9, 10]);
  });

  test("empty list returns empty result", () => {
    const { pageItems, totalPages } = paginate([], 1, 5);
    expect(pageItems).toEqual([]);
    expect(totalPages).toBe(0);
  });

  test("page too high returns empty array", () => {
    const { pageItems } = paginate(items, 5, 4);
    expect(pageItems).toEqual([]);
  });

  test("page size larger than list returns all items", () => {
    const { pageItems } = paginate(items, 1, 20);
    expect(pageItems).toEqual(items);
  });
});
