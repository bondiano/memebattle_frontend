import React from 'react'

const ESCAPE_KEY_CODE = 27

class BaseModal extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown)
  }

  onKeyDown = e => {
    // Close modal, if user click to Escape
    if (e.keyCode === ESCAPE_KEY_CODE) {
      this.props.onPreviousModal()
    }
  }

  render() {
    const { props } = this
    return (
      // TODO: Fix it
      // eslint-disable-next-line
      <div className="modal_wrapper" onClick={props.onPreviousModal}>
        {/* TODO: Fix it */}
        {/* eslint-disable-next-line */}
        <div
          className="modal_wrapper_content"
          onClick={e => e.stopPropagation()}>
          {props.header && (
            <h3 className="h3 -heading-primary">{props.header}</h3>
          )}
          {props.children}
          {!props.hideCloseButton && (
            <div style={{ paddingTop: '20px' }}>
              <button className="btn-default" onClick={props.onHideModal}>
                {props.closePopupText}
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default BaseModal
