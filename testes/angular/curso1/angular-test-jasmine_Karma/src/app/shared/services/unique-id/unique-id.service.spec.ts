import { UniqueIdService } from "./unidque-id.service";

describe(UniqueIdService.name, () => {
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
      const service = new UniqueIdService();
      const id = service.generateUniqueIdWithPrefix('app');
      expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix Should not generate duplicate IDs when called multiple times`, () => {
      const service = new UniqueIdService();
      const firstId = service.generateUniqueIdWithPrefix('app');
      const secondId = service.generateUniqueIdWithPrefix('app');
      expect(firstId).not.toBe(secondId)
  });
});
