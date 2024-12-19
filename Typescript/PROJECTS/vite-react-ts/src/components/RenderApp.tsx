let renderCount: number = 0
function RenderApp() {
  renderCount += 1

  return <div style={{ position: 'fixed', top: 0, right: 0, color: 'cyan', fontSize: '15px', backgroundColor: 'purple' }}>Render Count: {renderCount}</div>
}

export default RenderApp
