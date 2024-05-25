import { promises as fs } from 'fs';

async function saveFileToDisk(fileObj: File, destination: string) {
  try {
    const fileData = await fileObj.arrayBuffer();

    await fs.writeFile(destination, Buffer.from(fileData));

    console.log('File saved successfully.');
  } catch (error) {
    console.error('Error saving file:', error);
  }
}

export async function POST(request: Request) {
  const formData = await request.formData();
  console.log(process.cwd() + `/public/${formData.get("name")}.png`);
  await saveFileToDisk(formData.get("image") as File, process.cwd() + `/public/${formData.get("name")}.png`)
  return new Response("sucess");
}
