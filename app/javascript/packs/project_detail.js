const projectDetail = () => {
  const picture = document.querySelector(".picture1");
  const description = document.querySelector(".description");
console.log(picture)

  // when passing the mouse adding gradient and adding white text
  picture.addEventListener("mouseover", (event) => {
    console.log(event)
    const style = `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1574&q=80)`;
    document.querySelector(".picture1").style.backgroundImage = style
    description.insertAdjacentHTML('beforeend',
      `Description`
    );
  });

  // When the mouse is out of the card, remove gradient and text
  picture.addEventListener("mouseout", (event) => {
    const style = `url(https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1574&q=80)`;
    document.querySelector(".picture1").style.backgroundImage = style

    description.innerText = ""
  });
}

export { projectDetail }
