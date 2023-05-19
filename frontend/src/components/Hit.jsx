export function Hit({ hit }) {
    return (
      <article>
        <p>
          {hit.name}
        </p>
        <p>{hit.bts}</p>
      </article>
    );
  }