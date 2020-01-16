import React from 'react';

import './styles.css';

const DevItem = ({ dev, deleteDev }) => {
  async function handleDelete(e) {
    e.preventDefault();

    await deleteDev(dev._id);
  }

  return (
    <li className='dev-item'>
      <button className='icon-button' id='edit'>
        <i className='fas fa-edit'></i>
      </button>
      <button onClick={handleDelete} className='icon-button' id='destroy'>
        <i className='far fa-trash-alt'></i>
      </button>
      <header>
        <img src={dev.avatar_url} alt={dev.name} />

        <div className='user-info'>
          <strong>dev.name</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>
        Acessar perfil no github
      </a>
    </li>
  );
};

export default DevItem;
