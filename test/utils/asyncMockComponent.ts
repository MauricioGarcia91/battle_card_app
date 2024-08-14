export async function createAsyncMockComponent<T>(
  asyncComponent: (props: T) => Promise<JSX.Element>,
  props: T
) {
  return await asyncComponent(props);
}
