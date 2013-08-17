/* version:1.0 build:20130812110853 */
try {
    document.domain = "163.com"
}
catch (error) {
}

window.scrollTo(0, 1), function (a, b) {
    function c(a) {
        var c = b.createElement("script");
        c.onload = c.onerror = function () {
            c.parentNode.removeChild(c), c = null
        }, c.src = a, b.head.appendChild(c)
    }

    function d(b) {
        b = b || a.location.search;
        var c = {}, d = new RegExp("([^?=&]+)(=([^&]*))?", "g");
        return b && b.replace(d, function (a, b, d, e) {
            c[b] = e
        }), c
    }

    function e() {
        return this.Navigator = f, this.MetaHandler = g.init(), this.getJSONP = c, this.getSearch = d, this
    }

    var f = {localStorage: a.localStorage, frame: null, getFrame: function () {
        var a = document.createElement("iframe");
        return a.setAttribute("style", "display:none;width:0;height:0;position: absolute;top:0;left:0;border:0;"), a.setAttribute("height", "0px"), a.setAttribute("width", "0px"), a.setAttribute("frameborder", "0"), document.documentElement.appendChild(a), a
    }, removeFrame: function (a) {
        a && a.parentNode.removeChild(a)
    }, excute: function (a, b, c, d, e) {
        var f, g;
        f = c ? JSON.stringify(c) : "", a && "object" == typeof a && a[b] ? a[b](f) : (g = a, "string" == typeof b && b.length > 0 && (g += b + "/" + f), this.protocol(g, d, e))
    }, protocol: function (b, c, d) {
        var e, f, g = this;
        return d ? (a.location.href = b, void 0) : (c ? (e = this.getFrame(), e.setAttribute("src", b), f = setTimeout(function () {
            g.removeFrame(e)
        }, 3e3), e.onload = e.onreadystatechange = function () {
            clearTimeout(f), g.removeFrame(e)
        }) : (this.frame = this.frame || this.getFrame(), this.frame.setAttribute("src", b)), void 0)
    }, getLocalValue: function (a) {
        return this.localStorage ? this.localStorage[a] : null
    }, setLocalValue: function (a, b) {
        this.localStorage && this.localStorage.setItem(a, b)
    }}, g = {ready: !1, meta: {}, init: function () {
        this._els = document.getElementsByTagName("meta");
        for (var a = 0; a < this._els.length; a++) {
            var b = this._els[a].name;
            b && (b = b.replace("-", "_"), this.meta[b] = {}, this.meta[b].el = this._els[a], this.meta[b].content = this._els[a].content, this.meta[b].seriation = this.meta[b].content.split(","), this.meta[b].store = this.getContentStore(b))
        }
        return this.ready = !0, this
    }, getContentStore: function (a) {
        a = a.replace("-", "_");
        for (var b = this.meta[a].seriation, c = {}, d = 0; d < b.length; d++)if (b[d].length < 1)b[d] = null, delete b[d], b.length--; else {
            var e = b[d].split("="), f = e[0].replace("-", "_");
            f && (c[f] = e[1])
        }
        return c
    }, setContent: function (a, b) {
        return!this.ready && this.init(), a = a.replace("-", "_"), this.meta[a].content = b, this.meta[a].el.content = b, this
    }, getContent: function (a) {
        return!this.ready && this.init(), a = a.replace("-", "_"), this.meta[a] && this.meta[a].content
    }, updateContent: function (a) {
        return!this.ready && this.init(), this.meta[a].content = this.meta[a].seriation.join(","), this.setContent(a, this.meta[a].content), this
    }, removeContentProperty: function (a, b) {
        !this.ready && this.init();
        var a = a.replace("-", "_"), c = b.replace("-", "_");
        if (this.meta[a]) {
            if (null != this.meta[a].store[c])for (var d = 0; d < this.meta[a].seriation.length; d++)if (-1 != this.meta[a].seriation[d].indexOf(b + "=")) {
                this.meta[a].seriation[d] = null, delete this.meta[a].seriation[d];
                break
            }
            this.updateContent(a)
        }
        return this
    }, getContentProperty: function (a, b) {
        return!this.ready && this.init(), a = a.replace("-", "_"), b = b.replace("-", "_"), this.meta[a] && this.meta[a].store[b]
    }, setContentProperty: function (a, b, c) {
        !this.ready && this.init();
        var a = a.replace("-", "_"), d = b.replace("-", "_"), e = b + "=" + c;
        if (this.meta[a]) {
            if (null != this.meta[a].store[d]) {
                this.meta[a].store[d] = c;
                for (var f = 0; f < this.meta[a].seriation.length; f++)if (-1 != this.meta[a].seriation[f].indexOf(b + "=")) {
                    this.meta[a].seriation[f] = e;
                    break
                }
            } else this.meta[a].store[d] = c, this.meta[a].seriation.push(e);
            this.updateContent(a)
        }
        return this
    }, fixViewportWidth: function (b) {
        if (!this.ready && this.init(), b = b || this.getContentProperty("viewport", "width"), "device-width" != b) {
            var c = a.innerWidth || b, d = a.outerHeight || c, e = a.screen.width || c, f = a.screen.availWidth || c, g = a.innerHeight || b, h = a.outerHeight || g, i = a.screen.height || g, j = a.screen.availHeight || g, k = (Math.min(c, d, e, f, g, h, i, j), c / b), l = a.devicePixelRatio, k = Math.min(k, l);
            this.removeContentProperty("viewport", "user-scalable"), 1 > k && (this.setContentProperty("viewport", "initial-scale", k), this.setContentProperty("viewport", "minimum-scale", k), this.setContentProperty("viewport", "maximum-scale", k))
        }
    }};
    a.NTES = new e
}(window, document),

    function (a) {
        function b(a, b) {
            return a = a || "", a.replace(/{(([A-Z]|[_]|[0-9])+)}/g, function (a, c) {
                return null == b[c] ? a : b[c]
            })
        }

        function c(a, b, c, d) {
            function e(a) {
                a = a.sort(function () {
                    return.5 - Math.random()
                })
            }

            var f = [], g = a.slice(0);
            for (d = d || 0, d += d ? 0 : g.length; d;)e(g), d--;
            if (g.length <= b)f = g; else for (; f.length < b;) {
                var h = Math.floor(Math.random() * g.length), i = g[h];
                (c && c.call(this, i, g) || !c) && (f.push(i), g.splice(h, 1))
            }
            return f
        }

        function d() {
            var a = ["北京", "上海", "天津", "重庆", "浙江", "江苏", "广东", "福建", "湖南", "湖北", "辽宁", "吉林", "黑龙江", "河北", "河南", "山东", "陕西", "甘肃", "青海", "新疆", "山西", "四川", "贵州", "安徽", "江西", "云南", "内蒙古", "广西", "西藏", "宁夏", "海南", "香港", "澳门", "台湾", "海外", "其他地区"];
            lo = lo ? lo.replace("市", "").replace("省", "").replace("自治区", "").replace("特别行政区", "").replace("壮", "").replace("回", "").replace("族", "") : "其他地区", db = a.indexOf(lo) + 1, db = db ? db : a.length
        }

        function e() {
            document.addEventListener("touchmove", function (a) {
                ib && a.preventDefault()
            }, !1), P.btViewRule.on("click", function () {
                h("rule")
            }), P.btViewBoy.on("click", function () {
                cb = 1, s()
            }), P.btViewGirl.on("click", function () {
                cb = 2, s()
            }), P.userListSwitch.on(S, function () {
                i()
            }), P.ruleReturn.on(S, function () {
                h("home")
            }), P.userList.on("click", "article>div", function () {
                var a = $(this);
                Z = W[a.attr("data-index")], gb = 1, z()
            }), P.gameBt.on(S, m), P.gameHot.on(S, function () {
                ab = Z, A()
            }), P.gameMis.on(S, function () {
                ab = _, A()
            }), P.infoClose.on(S, function () {
                ib = !0, P.info.hide()
            }), P.infoBtA.on(S, o), P.infoBtB.on(S, p), P.qaHelp.on(S, n), P.qaList.on("click", ".ans>div", function () {
                j($(this))
            })
        }

        function f(a) {
            function b(a) {
                a = a || {};
                var b = this, c = a.el || P.qaList;
                this.isMoving = !1, this.moveTimeout = a.moveTimeout || 500, this.index = 0, this.itemLength = c.children().length, this.onMove = a.onMove || null, this.onFirst = a.onFirst || null, this.onLast = a.onLast || null, this.next = function () {
                    this.isMoving || (this.index++, this.move())
                }, this.pre = function () {
                    this.isMoving || (this.index--, this.move())
                }, this.move = function () {
                    this.isMoving || (this.isMoving = !0, setTimeout(function () {
                        b.isMoving = !1
                    }, this.moveTimeout), this.itemLength = c.children().length, this.index > this.itemLength - 1 ? (this.index = this.itemLength - 1, this.onLast && this.onLast()) : this.index < 0 && (this.index = 0, this.onFirst && this.onFirst()), c.css({"-webkit-transform": "translate3d(-" + 100 * this.index * (1 / this.itemLength) + "%,0,0);"}), this.onMove && this.onMove(this.index))
                }, this.reset = function () {
                    this.index = 0, c.css({"-webkit-transform": "translate3d(0,0,0);"})
                }
            }

            return new b(a)
        }

        function g() {
            R = R || "home", e(), $.os.iphone && NTES.MetaHandler.setContentProperty("viewport", "user-scalable", "no"), Q = Q || f({onMove: l, onLast: k}), h(R)
        }

        function h(b) {
            b = b || R, R = b, ib = "home" == R || "rule" == R || "user" == R ? !1 : !0, setTimeout(function () {
                "home" == R ? a.scrollTo(0, 90) : a.scrollTo(0, 1), b && P.body.removeClass("home-view qa-view rule-view game-view user-view").addClass(b + "-view")
            }, 300)
        }

        function i() {
            eb = eb >= W.length - 1 ? 0 : eb, C()
        }

        function j(a) {
            hb.push({name: a.parent().parent(".item").attr("id"), value: a.children(".an").text()}), Q.next()
        }

        function k() {
            gb = 3, z(), q()
        }

        function l(a) {
            F(), a == fb / 2 && (gb = 2, t())
        }

        function m() {
            1 == gb ? (Q.reset(), F(), r()) : 2 == gb ? h("qa") : 3 == gb && h("home")
        }

        function n() {
            NTES.Navigator.protocol(M, !0)
        }

        function o() {
            a.location.href = K
        }

        function p() {
            $.os.ios ? (a.location = N + ab.userId, setTimeout(function () {
                a.location = L
            }, 50)) : NTES.Navigator.protocol(N + ab.userId, !0)
        }

        function q() {
            for (var a = [], b = '<input type="text" name="{NAME}" value="{VALUE}"/>', c = 0; c < hb.length; c++)a.push(b.replace("{NAME}", hb[c].name).replace("{VALUE}", hb[c].value));
            P.infoForm.html(a.join("")), P.infoForm.attr("action", H.replace("{FORM_ID}", T.formId)), P.infoForm.submit()
        }

        function r() {
            T ? w() : NTES.getJSONP(G.replace("{CALLBACK}", "showQaList"))
        }

        function s() {
            _ = null, NTES.getJSONP(I.replace("{SEX}", cb))
        }

        function t() {
            d(), db && NTES.getJSONP(J.replace("{SEX}", cb).replace("{PROVINCE}", db))
        }

        function u() {
            return 1 == cb ? "男" : 2 == cb ? "女" : void 0
        }

        function v() {
            return 1 == cb ? "boy" : 2 == cb ? "girl" : void 0
        }

        function w(a) {
            (T || a && "success" == a.status) && (T = T || a, U = c(T.schema, fb), B(), F(), h("qa"))
        }

        function x(a) {
            a && a.length > 0 && (V = a, W = c(V, 45), P.userList.removeClass("boy girl").addClass(v()), P.userListHeader.html("选出你的心动" + u() + "生"), i(), h("user"))
        }

        function y(a) {
            a && (X = a, z())
        }

        function z() {
            D(), h("game")
        }

        function A() {
            3 == gb && (a.scrollTo(0, 1), E(), ib = !1)
        }

        function B() {
            var a = U, c = bb.qaList.item, d = 0, e = a.length, f = [];
            for (d; e > d; d++) {
                var g = a[d];
                f.push(b(c, {INDEX: d, QUE_ID: g.ns, QUE: g.title, ANS_A: g.enumValues[0], IMG_A: g.enumValues[2], ANS_B: g.enumValues[1], IMG_B: g.enumValues[3]}))
            }
            P.qaList.html(f.join(""))
        }

        function C() {
            for (var a = P.userListItems.length, b = 0; a > b; b++)P.userListItems[b].setAttribute("data-index", eb), P.userListItems[b].setAttribute("data-userid", W[eb].userId), $(P.userListItems[b]).css({"background-size": "150px auto", "background-image": "url(" + W[eb].avatar + ")", "background-position": "50% 50%"}), eb++
        }

        function D() {
            P.gameList.removeClass("start pause over"), P.gameMis.removeClass("girl boy"), 1 == gb ? (P.gameList.addClass("start"), P.gameMis.addClass(1 == cb ? "boy" : "girl"), P.gameHeader.html(bb.game.start.replace(/{sex}/gi, u)), P.gameBt.html("进入游戏")) : 2 == gb ? (Y = X.slice(0), X.length < 10 && Y.concat(c(V, 10 - X.length, function (a) {
                return a.userId != Z.userId
            })), _ = c(Y, 1, function (a) {
                return a.userId != Z.userId
            })[0], P.gameList.addClass("pause"), P.gameMis.addClass(1 == cb ? "boy" : "girl"), P.gameHeader.html(bb.game.pause.replace(/{sex}/gi, u)), P.gameMisAvatar.css({"background-image": "url(" + _.avatar + ")"}), P.gameBt.html("继续游戏")) : 3 == gb && (P.gameList.addClass("over"), P.gameHeader.html(bb.game.over.replace(/{sex}/gi, 1 == cb ? "他" : "她")), P.gameMisAvatar.css({"background-image": "url(" + _.avatar + ")"}), P.gameBt.html("再玩一次")), P.gameHotAvatar.css({"background-image": "url(" + Z.avatar + ")"}), P.gameHotTitle.html("心动" + u() + "生"), P.gameMisTitle.html("神秘" + u() + "生")
        }

        function E() {
            if (ab) {
                P.infoTextA.html(bb.user.textA.replace(/{SEX}/gi, 1 == cb ? "他" : "她")), P.infoAvatar.css({"background-image": "url(" + ab.avatar + ")"});
                var a = [], b = bb.user.info;
                ab.nickName && a.push(b.name.replace("{NAME}", ab.nickName)), ab.age && a.push(b.age.replace("{AGE}", ab.age)), ab.area && a.push(b.area.replace("{AREA}", ab.area)), ab.education && a.push(b.edu.replace("{EDU}", ab.education)), ab.constellation && a.push(b.constellation.replace("{CONSTELLATION}", ab.constellation)), ab.industry && a.push(b.industry.replace("{INDUSTRY}", ab.industry)), ab.salary && a.push(b.salary.replace("{SALARY}", ab.salary)), ab.position && a.push(b.position.replace("{POSITION}", ab.position)), P.infoDetail.html(a.join("")), P.info.css({display: "-webkit-box"})
            }
        }

        function F() {
            0 == Q.index && P.qaDots.removeClass("on"), $(P.qaDots[Q.index]).addClass("on"), U && U[Q.index] && P.sharePhoto.html(U[Q.index].enumValues[4])
        }

        var G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, ab, bb = {}, cb = 1, db = 0, eb = 0, fb = 16, gb = 1, hb = [], ib = !1;
        S = $.os.iphone || $.os.android ? "touchstart" : "click",
            M = "share://",
            N = "huatian://profile/",
            K = "http://3g.163.com/links/4377",
            L = "itms-appss://itunes.apple.com/cn/app/id569778005",
            O = 391,
            G = "http://active.163.com/service/project/v1/" + O + "/one.jsonp?callback={CALLBACK}",
            H = "http://active.163.com/service/form/v1/{FORM_ID}/submit?_charset=UTF-8",
            I = "http://love.163.com/suggest/user/{SEX}",
            J = "http://love.163.com/suggest/localUser/{SEX}/{PROVINCE}",
            bb.qaList = {},
            bb.qaList.item = '<article class="item" id="{QUE_ID}" data-index="{INDEX}"><header class="title">{QUE}</header><div class="ans"><div><div class="img"><div style="background-image: url({IMG_A});"></div></div><div class="an">{ANS_A}</div></div><div><div class="img"><div style="background-image: url({IMG_B});"></div></div><div class="an">{ANS_B}</div></div></div></article>',
            bb.game = {},
            bb.game.start = "<div>想查看心动{SEX}的资料吗？</div><div>想知道更适合你的那个神秘{SEX}生是谁吗？</div><div>赶紧进入游戏</div>",
            bb.game.pause = "<div>任务完成一半，继续游戏</div><div>获得与心动 and 神秘{SEX}生交往的机会。</div>",
            bb.game.over = "<div><div>Bingo！</div><div>还等什么，点击头像来查看{SEX}们的资料吧</div></div>",
            bb.user = {},
            bb.user.info = {name: "<article><div>昵称</div><div>{NAME}</div></article>", age: "<article><div>年龄</div><div>{AGE}</div></article>", area: "<article><div>地区</div><div>{AREA}</div></article>", edu: "<article><div>学历</div><div>{EDU}</div></article>", constellation: "<article><div>星座</div><div>{CONSTELLATION}</div></article>", industry: "<article><div>行业</div><div>{INDUSTRY}</div></article>", salary: "<article><div>收入</div><div>{SALARY}</div></article>", position: "<article><div>职位</div><div>{POSITION}</div></article>"},
            bb.user.textA = "<div>对{SEX}心动了？</div><div>下载花田，立即与{SEX}联系！</div>",
            P = {body: $("body"), callbackframe: $("#callbackframe"), infoForm: $("#infoform"), btViewRule: $(".home-ct .rule"), btViewBoy: $(".home-ct .boy"), btViewGirl: $(".home-ct .girl"), userList: $(".user-ct>.list"), userListHeader: $(".user-ct>header"), userListItems: $(".user-ct .list>article>div"), userListSwitch: $(".user-ct .switch"), gameHeader: $(".game-ct>header"), gameList: $(".game-ct .list"), gameBt: $(".game-ct .bt"), gameHot: $(".game-ct .hot"), gameMis: $(".game-ct .mis"), gameHotAvatar: $(".game-ct .hot .avatar>div"), gameMisAvatar: $(".game-ct .mis .avatar>div"), gameHotTitle: $(".game-ct .hot .title"), gameMisTitle: $(".game-ct .mis .title"), qaList: $(".qa-ct .list"), qaDots: $(".qa-ct .dot"), qaHelp: $(".qa-ct .help"), info: $(".info-ct"), infoClose: $(".info-ct .close"), infoAvatar: $(".info-ct .avatar>div"), infoDetail: $(".info-ct .info"), infoTextA: $(".info-ct .text-a"), infoBtA: $(".info-ct .bt-a"), infoBtB: $(".info-ct .bt-b"), ruleReturn: $(".rule-ct .return"), sharePhoto: $("#__newsapp_sharephotourl")},
            a.showUserList = x,
            a.showLocalList = y,
            a.showQaList = w,
            g()
    }(window, document);