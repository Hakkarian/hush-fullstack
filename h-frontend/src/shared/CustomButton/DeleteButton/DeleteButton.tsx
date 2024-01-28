import React from 'react'
import { DeleteButtonCss } from './DeleteButton.styled';

const DeleteButton = () => {
    return (
      <DeleteButtonCss>
        <div className="button-main">
          <div className="btn-bg Ocean">
            <div className="btn-group">
              <div className="btn Debris">
                <button>
                  delete<span className="one"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </DeleteButtonCss>
    );
}

export default DeleteButton