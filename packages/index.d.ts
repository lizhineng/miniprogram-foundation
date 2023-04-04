// Type definition for Mini Program Foundation
// Project: Mini Program Foundation
// Definitions by: Li Zhineng <https://zhineng.li>

export as namespace Foundation

export interface RoutingHandler {
  to: (
    options: WechatMiniprogram.NavigateToOption
  ) => Promise<WechatMiniprogram.NavigateToSuccessCallbackResult>
}
