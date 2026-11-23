import { afterEach, describe, expect, setSystemTime, test } from "bun:test";
import { getAge } from "./age";

afterEach(() => {
	setSystemTime();
});

describe("getAge", () => {
	test("is 14 the day before the 15th birthday", () => {
		setSystemTime(new Date("2025-10-27T12:00:00Z"));
		expect(getAge()).toBe(14);
	});

	test("is 15 the day after the 15th birthday", () => {
		setSystemTime(new Date("2025-10-29T12:00:00Z"));
		expect(getAge()).toBe(15);
	});
});
