module.exports = {
    languages: {
        en: "English",
        cn: "简体中文",
        fr: "Français",
        ko: "한국어",
        de: "Deutsch"
    },
    header: {
        title: "比特股 2.0",
        dashboard: "概览",
        explorer: "浏览",
        exchange: "交易",
        payments: "支付",
        logout: "注销",
        settings: "设置",
        current: "当前账户",
        create_account: "创建账户",
        create_asset: "创建资产",
        lock: "锁定钱包",
        unlock: "解锁钱包"
    },
    account: {
        assets: "资产",
        market_value: "市值",
        hour_24: "24小时",
        recent: "近期活动",
        name: "账户名",
        member: {
            stats: "会员数据",
            join: "加入于",
            reg: "注册人",
            ref: "推荐人",
            referrals: "被推荐人",
            rewards: "返现奖励",
            cashback: "返现",
            vested: "既得",
            ref_percentage: "手续费推荐人奖励比例",
            network_percentage: "手续费网络收取比例",
            fees_paid: "已支付终身会员费",
            fees_pending: "待付金额",
            fees_vested: "待解冻金额",
            in_orders: "委单冻结金额 %(core_asset)s ",
            unknown: "未知的会员",
            lifetime: "终身会员",
            basic: "普通会员",
            annual: "年度订阅者"
        },
        connections: {
            known: "Known by",
            black: "被屏蔽"
        },
        asset: "资产",
        more: "查看更多",
        user_issued_assets: {
            symbol: "符号",
            name: "资产名称",
            description: "描述",
            max_supply: "最大供给量",
            precision: "精度",
            to: "发行到账户",
            details: "详细"
        },
        perm: {
            active: "活跃权限",
            owner: "所有人权限",
            publish: "保存修改",
            reset: "重置修改",
            add: "增加权限",
            type: "类型",
            key: "键/名字",
            weight: "权重",
            threshold: "阈值",
            confirm_add: "增加",
            cancel: "取消"
        },
        votes: {
            proxy: "代理投票账户",
            no_proxy: "无代理",
            name: "账户名",
            info: "信息",
            votes: "votes",
            url: "主页",
            support: "支持",
            workers: "预算项目",
            publish: "保存修改",
            add_witness: "添加",
            remove_witness: "移除",
            remove_committee: "移除",
            add_committee: "添加",
            add_committee_label: "受托人",
            add_witness_label: "见证人"
        },
        options: {
            num_witnesses: "Desired Witnesses",
            num_committee: "Desired Committee Members",
            memo_key: "Memo Key"
        },
        upgrade: "升级账户",
        unlink: "取消关联",
        link: "关联",
        pay: "向他付款",
        overview: "概述",
        history: "交易历史",
        payees: "付款人",
        permissions: "权限",
        voting: "投票",
        orders: "订单",
        select_placeholder: "选择账户...",
        errors: {
            not_found: "账户 %(name)s 不存在, 你确定输入正确么?"
        }
    },
    transfer: {
        from: "来自",
        amount: "金额",
        to: "发往",
        memo: "备注消息",
        fee: "手续费",
        send: "发送",
        "final": "转账后余额",
        balances: "余额",
        errors: {
            req: "必填信息",
            pos: "数量必须大于0",
            valid: "请输入一个合法的大于0的半角数字",
            balance: "最终余额必须大于0"
        },
        back: "返回",
        confirm: "确认发送",
        broadcast: "你的转账已经向网络广播",
        again: "发起新的转账",
        see: "查看我的转账记录",
        available: "可用余额: ",
        broadcasting: "交易广播中...",
        close: "关闭"
    },
    transaction: {
        sent: "已发送",
        to: "发往",
        received: "已接收",
        from: "来自",
        amount_sell: "出售数量",
        expiration: "过期时间",
        fill_or: "成交或取消",
        min_receive: "接收的最小数量",
        seller: "卖家",
        collateral: "抵押",
        coll_ratio: "初始抵押率",
        coll_maint: "Collateral maintenance ratio",
        create_key: "创建一个公钥",
        reg_account: "注册账户",
        was_reg_account: "注册人",
        create_asset: "Created the asset",
        limit_order: "限价出售单",
        limit_order_buy: "限价买入单",
        limit_order_cancel: "已取消的限价单",
        short_order: "空单",
        short_order_cancel: "已取消的空单",
        at: "at",
        coll_of: "抵押为",
        call_order_update: "Updated call order",
        upgrade_account: "升级到终身会员账户",
        update_account: "更新账户",
        whitelist_account: "加入白名单",
        whitelisted_by: "已由该账户加入白名单",
        transfer_account: "转移账户",
        update_asset: "更新资产",
        update_feed_producers: "更新资产喂价人",
        feed_producer: "成为资产喂价人",
        asset_issue: "Issued",
        was_issued: "被发行",
        by: "由",
        burn_asset: "已销毁",
        fund_pool: "转入资产资金池",
        asset_settle: "请求资产清算",
        asset_global_settle: "请求全局资产清算",
        publish_feed: "资产喂价",
        delegate_create: "创建受托人",
        witness_create: "创建见证人",
        witness_pay: "提取见证人收入到账户",
        witness_receive: "Received witness from witness",
        proposal_create: "创建提案",
        proposal_update: "更新提案",
        proposal_delete: "删除提案",
        withdraw_permission_create: "授予账户提取权限",
        withdraw_permission_update: "更新账户提取权限",
        withdraw_permission_claim: "主张账户提取权限",
        withdraw_permission_delete: "删除账户提取权限",
        paid: "Paid",
        obtain: "to obtain",
        global_parameters_update: "更新全局参数",
        file_write: "写入文件",
        vesting_balance_create: "创建待解冻余额",
        "for": "for",
        vesting_balance_withdraw: "提取解冻资金",
        bond_create_offer: "创建债券要约",
        bond_cancel_offer: "取消债券要约",
        bond_accept_offer: "接受债券要约",
        bond_claim_collateral: "索取抵押物",
        bond_pay_collateral: "支付抵押金",
        create_worker: "创建雇员，要求报酬为",
        custom: "创建自定义操作",
        order_id: "订单ID",
        trxTypes: {
            transfer: "转账",
            limit_order_create: "限价单",
            limit_order_cancel: "取消限价单",
            call_order_update: "Update call order",
            account_create: "创建账户",
            account_update: "更新账户",
            account_whitelist: "账户白名单",
            account_upgrade: "升级账户",
            account_transfer: "账户转移",
            asset_create: "创建资产",
            asset_update: "更新资产",
            asset_update_bitasset: "更新智能币",
            asset_update_feed_producers: "更新资产喂价者",
            asset_issue: "发行资产",
            asset_reserve: "销毁资产",
            asset_fund_fee_pool: "积存资产费用池",
            asset_settle: "资产结算",
            asset_global_settle: "全局资产清算",
            asset_publish_feed: "发布资产喂价",
            delegate_create: "创建受托人",
            witness_create: "创建见证人",
            witness_withdraw_pay: "见证人取回报酬",
            proposal_create: "创建提案",
            proposal_update: "更新提案",
            proposal_delete: "删除提案",
            withdraw_permission_create: "创建提取权限",
            withdraw_permission_update: "更新提取权限",
            withdraw_permission_claim: "主张提取权限",
            withdraw_permission_delete: "删除提取权限",
            fill_order: "撮合订单",
            delegate_update_global_parameters: "全局参数更新",
            vesting_balance_create: "创建冻结账目余额",
            vesting_balance_withdraw: "提取解冻账户余额",
            worker_create: "创建雇员",
            custom: "自定义",
            assert: "断言操作",
            balance_claim: "领取余额",
            override_transfer: "优先覆盖转账"
        },
        confirm: "请确认交易",
        broadcast_success: "交易已向网络广播",
        broadcast_fail: "交易广播失败: %(message)s",
        limit_order_sell: "提交订单 #%(num)s, 以 %(sell_price)s 的价格卖出 %(sell_amount)s",
        balance_claim: "从余额ID #%(balance_id)s 中领取金额 %(balance_amount)s ",
        balance_owner: "余额所有者公钥",
        balance_id: "余额ID",
        deposit_to: "向账户存入",
        claimed: "领取总额",
        broadcasting: "交易广播中..",
        broadcasting_short: "交易广播中.."
    },
    explorer: {
        accounts: {
            title: "账户"
        },
        blocks: {
            title: "区块链",
            globals: "全局参数",
            recent: "最近区块"
        },
        block: {
            title: "区块",
            id: "区块 ID",
            witness: "见证人",
            count: "交易数",
            date: "日期",
            previous: "上一个",
            previous_secret: "上一个密文",
            next_secret: "下一个密文哈希值",
            op: "操作",
            trx: "交易",
            op_type: "操作类型",
            fee_payer: "手续费支付账户",
            key: "公钥",
            transactions: "交易数量",
            account_upgrade: "可升级账户",
            lifetime: "升级到终身会员账户",
            authorizing_account: "授权账户",
            listed_account: "Listed account",
            new_listing: "New listing",
            asset_update: "可更新资产",
            common_options: "Common options",
            new_options: "New options",
            new_producers: "New feed producers",
            asset_issue: "发行数量",
            max_margin_period_sec: "Max margin period (s)",
            call_limit: "Call limit",
            short_limit: "Short limit",
            settlement_price: "结算价格"
        },
        assets: {
            title: "资产",
            market: "智能币",
            user: "用户发行资产",
            symbol: "代码",
            id: "ID",
            issuer: "发行人",
            precision: "精度"
        },
        asset: {
            title: "资产",
            not_found: "资产 %(name)s 不存在"
        },
        witnesses: {
            title: "见证人"
        },
        delegates: {
            title: "受托人"
        },
        delegate: {
            title: "受托人"
        },
        workers: {
            title: "雇员"
        },
        proposals: {
            title: "提案"
        },
        account: {
            title: "账户"
        }
    },
    settings: {
        inverseMarket: "市场交易对视角",
        unit: "显示记账单位",
        confirmMarketOrder: "市场订单要求确认",
        locale: "语言选择",
        confirm_yes: "总是",
        confirm_no: "从不",
        always_confirm: "总是要求确认"
    },
    pagination: {
        newer: "更近",
        older: "更早"
    },
    footer: {
        title: "Graphene 石墨烯",
        block: "最新区块",
        loading: "载入中..."
    },
    exchange: {
        price_history: "Price History",
        order_depth: "订单深度",
        market_history: "市场历史",
        balance: "我的余额",
        lowest_ask: "最低卖单",
        highest_bid: "最高买单",
        total: "Total",
        value: "Value",
        price: "Price",
        latest: "Latest Price",
        call: "Call Price",
        volume: "成交量",
        spread: "Spread",
        quantity: "Amount",
        buy: "Buy",
        sell: "Sell",
        confirm_buy: "Confirm order: Buy %(buy_amount)s %(buy_symbol)s at a price of %(price_amount)s %(price_symbol)s",
        confirm_sell: "Confirm order: Sell %(sell_amount)s %(sell_symbol)s at a price of %(price_amount)s %(price_symbol)s"
    },
    markets: {
        choose_base: "选择基准资产",
        filter: "筛选",
        core_rate: "Core rate",
        supply: "供应量",
        search: "搜索"
    }
};