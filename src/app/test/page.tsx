"use client"
import { trpc } from "../_trpc/client";

export default function IndexPage() {
  const mutation = trpc.protected.registerGame.useMutation({
    onSuccess() {
      alert('success!');
    },
    onError(err) {
      alert('Error: ' + err.message);
    },
  });

  return (
    <>
      <h1>Form!</h1>
      <fieldset>
        <legend>Form with file upload</legend>
        <form
          onSubmit={(e) => {
            const formData = new FormData(e.currentTarget);
            fetch(`http://localhost:3000/api/upload`, { method: "POST", body: formData }).then(() => { })
            e.preventDefault();
          }}
        >
          <p>
            <input name="name" defaultValue="haz upload" />
          </p>
          <p>
            <input type="file" name="image" />
          </p>
          <p>
            <button type="submit">submit</button>
          </p>
        </form>
      </fieldset>
    </>
  );
}
