import React from 'react';
import { Link } from '@reach/router';

const Card = ({ image, title, id }) => {
  return (
    <Link
      to={`/tenant/${id}`}
      className="border rounded overflow-hidden  mx-1 justify-center flex flex-col px-6 py-2 items-center no-underline text-black my-1 shadow-md md:w-1/4 md:my-0 md:shadow-lg"
    >
      <div>
        <div className="w-full flex justify-center">
          <figure>
            <img src={image} alt={title} />
          </figure>
        </div>
        <div className="w-full pt-4 flex justify-center flex-col items-center">
          <h3>{title} </h3>
          <p>Simple description</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
