async function editPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name=post-title')
    const contents = document.querySelector('input[name=post-content')

    if (title && contents) {
        const response = await fetch('/api/posts/', {
            method: 'PUT',
            body: JSON.stringify({
                title, contents
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert(response.statusText);
          }
         }
}
