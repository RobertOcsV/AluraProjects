import { UniqueServiceId } from "./unidque-id.service";

describe(UniqueServiceId.name, () => {
  it(`#generatedUniqueIdWithPrefix should generate id when called with prefix`, () => {
    const service = new UniqueServiceId();
    const id = service.generatedUniqueIdWithPrefix('app');
    expect(id).toContain('app-')
  })

})
