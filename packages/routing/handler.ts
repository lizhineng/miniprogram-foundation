export default class Handler implements Foundation.RoutingHandler {
  protected sdk: WechatMiniprogram.Wx

  constructor(sdk: WechatMiniprogram.Wx) {
    this.sdk = sdk
  }

  async to(options: WechatMiniprogram.NavigateToOption) {
    return await this.sdk.navigateTo(options)
  }
}
