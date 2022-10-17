//container job is to join react to redux 
/*Flow = action-->reducer-->store
*/
import React from 'react'
import { connect } from 'react-redux'
import Redux from '../components/Redux'
import { addToCart } from '../services/actions/action'

const mapStateToProps = (state) => ({    //button events
    cartData: state
})

const mapDispatchToProps = (dispatch) => ({
    addToCartHandler: data => dispatch(addToCart(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Redux);