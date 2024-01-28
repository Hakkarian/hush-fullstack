import React from 'react'
import { DeleteButtonCss } from '../DeleteButton/DeleteButton.styled';

const AddButton = () => {
  return (
    <DeleteButtonCss>
      <div className="button-main">
        <div className="btn-bg Ocean">
          <div className="btn-group">
            <div className="btn Coral">
              <button>
                coral
                <span className="Coralwave1"></span>
                <span className="Coralwave2"></span>
                <span className="Coralwave3"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </DeleteButtonCss>
  );
}

export default AddButton