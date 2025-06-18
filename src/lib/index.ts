export async function getPubs() {
  const files = import.meta.glob('/src/routes/pubs/*.md');
	const pubs = await Promise.all(
		Object.entries(files).map(async ([path, resolver]) => {
      try {
        const { metadata} = await resolver();
        const slug = path.slice(11, -3);
			  return {slug, ...metadata};
      } catch (error) {
        return {date: Date.now()};
      }
		})
	);

  return pubs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};