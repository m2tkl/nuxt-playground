import useFlagState from '@/composables/flagState'

describe('flagState.spec.ts', () => {
  it('初期値がセットできる', () => {
    const flagStateFalse = useFlagState(false)
    expect(flagStateFalse.isOn.value).toBeFalsy()

    const flagStateTrue = useFlagState(true)
    expect(flagStateTrue.isOn.value).toBeTruthy()
  })

  it('toggleで状態が切り替わる', () => {
    // 初期値
    const flagState = useFlagState(false)
    expect(flagState.isOn.value).toBeFalsy()

    // 1回目のtoggle
    flagState.toggle()
    expect(flagState.isOn.value).toBeTruthy()

    // 2回目のtoggle
    flagState.toggle()
    expect(flagState.isOn.value).toBeFalsy()
  })

  it('on, offで状態が切り替わる', () => {
    // 初期値
    const flagState = useFlagState(false)
    expect(flagState.isOn.value).toBeFalsy()

    // on
    flagState.on()
    expect(flagState.isOn.value).toBeTruthy()

    // off
    flagState.off()
    expect(flagState.isOn.value).toBeFalsy()
  })
})
