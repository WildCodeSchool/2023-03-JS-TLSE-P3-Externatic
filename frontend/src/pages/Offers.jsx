function Offers() {
  const handleSubmit = () => {};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Mot-clé..." />
        <input type="text" placeholder="Localisation..." />
        <select>
          <option value="">Test</option>
          <option value="">Test</option>
          <option value="">Test</option>
        </select>
        <select>
          <option value="">Test</option>
          <option value="">Test</option>
          <option value="">Test</option>
        </select>
        <button type="submit">Lancer la recherche</button>
      </form>
    </div>
  );
}

export default Offers;
