/**
 * Checks if an object has a specific key
 *
 * @template ObjectType The type of the object to check
 * @param obj Object to check
 * @param key Key to check for
 * @returns Whether the object has the specified key
 */
export const hasKey = <ObjectType>(
  obj: ObjectType,
  key: PropertyKey
): key is keyof ObjectType => {
  return Object.hasOwn(obj as object, key);
};
