export async function getFetchData() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    const res = await fetch('http://localhost:5000/goshofeedbacks');
    return res.json();
  }