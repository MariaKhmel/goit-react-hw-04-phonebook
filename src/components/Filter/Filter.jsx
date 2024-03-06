import PropTypes from 'prop-types';

export const Filter = ({filter,handleFilterChange} )=> {

        return (
          <div style={{ marginTop: 20 }}>
            <p style={{paddingBottom:'5px'}}>
                Find contacts by name
            </p>
            {/* <br/> */}
            <input
                name='filter'
                value={filter}
                onChange={handleFilterChange} />  
      </div> )
}

export default Filter;

Filter.propTypes = {
  filter:PropTypes.string.isRequired,
  handleFilterChange:PropTypes.func.isRequired,
}
