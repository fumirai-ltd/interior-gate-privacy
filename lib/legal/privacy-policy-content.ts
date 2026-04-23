import type {AppLocale} from "@/i18n/config";
import type {LegalDocumentWithIntro} from "@/lib/legal/legal-document-types";

const privacyPolicyEn: LegalDocumentWithIntro = {
  title: "Privacy Policy",
  updatedAtLabel: "Last updated",
  updatedAt: "April 23, 2026",
  intro: [
    "This Privacy Policy (this “Policy”) explains how Interior Gate (the “Service”) treats personal information and personal data, including that process under Japan’s Act on the Protection of Personal Information (“APPI”) and any applicable guidelines issued by the Personal Information Protection Commission of Japan, as well as other applicable laws. By using the Service, you agree to the practices described in this Policy.",
  ],
  sections: [
    {
      anchorId: "pp-0",
      heading: "1. Business operator",
      paragraphs: [
        "Service name: Interior Gate (the “Company”). The Company operates the online platform, related software, and customer support in connection with the Service.",
        "The Company is the business operator handling personal data under the APPI, unless a separate data controller is designated in a specific feature or contract.",
      ],
    },
    {
      anchorId: "pp-1",
      heading: "2. Contact for personal information",
      paragraphs: [
        "For requests concerning disclosure, correction, suspension of use, third-party transfer records, complaints, and other inquiries about personal data, use the contact method published on the Service (for example, the inquiry form or support email). The Company will verify your identity in accordance with internal procedures and respond within a reasonable period, except where the APPI or other laws allow refusal.",
      ],
    },
    {
      anchorId: "pp-2",
      heading: "3. Categories of personal data",
      paragraphs: [
        "Depending on how you use the Service, the Company may process the following categories, not all of which apply to every user:",
      ],
      listTitle: "Examples of items",
      listItems: [
        "Account and profile: name, user name, email address, password (stored in hashed form), profile text, and optional profile image.",
        "Usage and technical data: access logs, IP address, device/browser type, approximate region derived from network information, and interaction events to maintain security, analytics, and product improvement.",
        "Support communications: content you send in inquiries, attachments, and email headers necessary to handle requests.",
        "Payment and billing (if you purchase paid features, where such features are offered): tokenized or provider-held payment identifiers, billing address, and transaction status as required by the payment service provider, not full card numbers stored by the Company when processing is delegated.",
      ],
    },
    {
      anchorId: "pp-3",
      heading: "4. Purposes of use",
      paragraphs: [
        "The Company processes personal data for the following purposes. The Company will not use personal data beyond the scope needed to achieve these purposes, except with your separate consent or as permitted by law.",
      ],
      listTitle: "Purposes of processing",
      orderedList: true,
      listItems: [
        "To provide, operate, secure, and improve the Service, including account creation, authentication, service notifications, and anti-fraud measures.",
        "To respond to support requests, notify you of important changes, and communicate about the Service where permitted by law and your settings.",
        "To create statistical or aggregated data that do not identify individuals, and to develop and improve features and user experience.",
        "To fulfill legal obligations, respond to lawful requests from public authorities, and assert or defend legal rights.",
        "For marketing communications only if you have opted in where required, or as otherwise allowed under applicable law.",
      ],
    },
    {
      anchorId: "pp-4",
      heading: "5. Change of purpose of use",
      paragraphs: [
        "If the purpose of use is changed, the Company will notify you in a manner the Company deems appropriate (for example, by posting on the website or in-app notice) and obtain consent where the APPI or other law requires it.",
      ],
    },
    {
      anchorId: "pp-5",
      heading: "6. Legal basis and consent (including cross-border context)",
      paragraphs: [
        "Where the Company relies on consent, you may withdraw it through account settings, unsubscribe links, or the contact in Section 2, without affecting the lawfulness of processing before withdrawal where permitted.",
        "If the Company transfers personal data to recipients outside Japan, the Company will take measures required by the APPI (for example, obtaining your consent, ensuring the recipient’s system reflects standards equivalent to Japan’s, or using contractual safeguards), and provide further information where the law requires it.",
      ],
    },
    {
      anchorId: "pp-6",
      heading: "7. Third-party provision",
      paragraphs: [
        "The Company does not sell your personal data. The Company will not provide personal data to third parties except: (1) with your prior consent, (2) as permitted for outsourcing under Section 8, (3) to successor entities in a merger or business transfer, or (4) when disclosure is required or permitted by law, including to government authorities upon lawful request.",
        "If the Company provides data to a third party (other than outsourcing) that should be identified under the APPI, the Company will record required matters as prescribed by law and disclose them to you on request, subject to exceptions.",
      ],
    },
    {
      anchorId: "pp-7",
      heading: "8. Outsourcing",
      paragraphs: [
        "The Company may entrust the handling of personal data, in whole or in part, to external contractors such as cloud hosting, email delivery, analytics, customer support tools, and payment processing. The Company supervises such contractors, selects them with due care, and ensures confidentiality and security through contracts and, where needed, on-site or documented assessments.",
      ],
    },
    {
      anchorId: "pp-8",
      heading: "9. Cookies and similar technologies",
      paragraphs: [
        "The Service may use cookies, local storage, and similar technologies for session management, security, language preference, and analytics. You can control some cookies through browser settings; if you block essential cookies, parts of the Service may not work correctly. Where analytics or non-essential cookies are used, the Company will request consent in accordance with applicable law and the Company’s cookie notice, if one is provided separately on the site.",
      ],
    },
    {
      anchorId: "pp-9",
      heading: "10. Retention",
      paragraphs: [
        "The Company retains personal data only as long as needed for the purposes in Section 4, to comply with law, to resolve disputes, and to enforce agreements. Retention periods vary by data category; after the period, the Company deletes or anonymizes data, unless a longer period is required by law.",
      ],
    },
    {
      anchorId: "pp-10",
      heading: "11. Security measures",
      paragraphs: [
        "The Company implements appropriate organizational, physical, and technical safeguards against unauthorized access, loss, destruction, alteration, and leakage, including access controls, employee training, incident response procedures, and logging. Measures are reviewed periodically as the risk profile changes.",
      ],
    },
    {
      anchorId: "pp-11",
      heading: "12. Your rights and procedures (disclosure, etc.)",
      paragraphs: [
        "Subject to the APPI and other laws, you may request notification of the purpose of use, disclosure, correction, addition, deletion, suspension of use, suspension of third-party provision, and disclosure of third-party transfer records, through the contact in Section 2. A fee may be charged only where permitted. The Company may refuse requests in cases prescribed by law (for example, if disclosure would harm the life, body, or property of another person, or if it would unreasonably interfere with the Company’s operations).",
        "The Company will endeavor to complete your request within a reasonable time after identity verification, and to explain the reason in writing if a request is refused in whole or in part.",
      ],
    },
    {
      anchorId: "pp-12",
      heading: "13. Minors",
      paragraphs: [
        "If the Service is not directed at minors, the Company does not intentionally collect data from children without parental or guardian consent where such consent is required. If you believe such data was provided, contact the Company using Section 2.",
      ],
    },
    {
      anchorId: "pp-13",
      heading: "14. Changes to this Policy",
      paragraphs: [
        "The Company may change this Policy to reflect changes in the Service, law, or practice. The revised Policy will be posted on the Service with an updated “Last updated” date, and, where the APPI or other law requires, the Company will obtain your consent or provide additional notice. Continued use of the Service after the effective time may constitute consent where permitted.",
      ],
    },
  ],
};

const privacyPolicyJa: LegalDocumentWithIntro = {
  title: "プライバシーポリシー",
  updatedAtLabel: "最終更新日",
  updatedAt: "2026年4月23日",
  intro: [
    "本プライバシーポリシー（以下「本ポリシー」といいます。）は、Interior Gate（以下「本サービス」といいます。）における、個人情報等の取扱いを定めるものです。当社（第1項で定めます。）は、個人情報の保護に関する法律（以下「個人情報保護法」といいます。）その他の関係法令、ならびに必要に応じて個人情報保護委員会のガイドライン等を踏まえ、適切に個人データ等を保護します。本サービスを利用することにより、利用者（以下「利用者」といいます。）は、本ポリシーに同意したものとみなします。",
  ],
  sections: [
    {
      anchorId: "pp-0",
      heading: "1. 事業者の氏名等",
      paragraphs: [
        "名称：本サービス「Interior Gate」を運営する事業者（以下「当社」といいます。）は、本サービスに関するオンライン上の提供、付随するソフトウェアの提供、およびこれらに付随するカスタマーサポート等を行います。当社の名称、代表者、所在地その他法で求められる事項が本サービス上に掲示されている場合、当該掲示をご確認ください。掲示がない場合、開示等の求め、苦情、お問い合わせ等については、第2条の窓口にて対応し、所定の手続のうえ、書面等によりご回答します。",
      ],
    },
    {
      anchorId: "pp-1",
      heading: "2. 個人情報の取扱いに関するお問い合わせ窓口",
      paragraphs: [
        "開示、訂正、追加、削除、利用の停止、第三者提供の記録の開示、苦情、相談等の求め、および本ポリシーに関するお問い合わせは、本サービス上に掲示する窓口（例：お問い合わせフォーム、サポート用メールアドレス。以下同じ。）にて受け付けます。当社は、法令に従い、本人確認を行ったうえ、合理的な期間内に回答します。個人情報保護法その他の法令に基づき拒むことができる場合は、その理由を通知します。手数料等をいただく場合は、あらかじめ通知します。",
      ],
    },
    {
      anchorId: "pp-2",
      heading: "3. 取得する個人情報の項目",
      paragraphs: [
        "利用者が本サービスを利用する状況に応じ、当社は、次の各号のうち、該当する項目（個人関連情報、要配慮個人情報、認証事業者等が保有する本人確認用データを含む範囲に限り、同様に以下「個人データ等」といいます。）を取得する場合があります。取得項目は、利用者ごとにすべてが該当するものではありません。",
      ],
      listTitle: "主な例",
      orderedList: true,
      listItems: [
        "アカウント・プロフィール：氏名、ニックネーム、電子メールアドレス、パスワード（ハッシュ化等により保存する場合に限り、平文のまま当社に保存しません。）、自己紹介、任意のプロフィール画像。",
        "利用・技術情報：接続日時、IPアドレス、端末及びブラウザの識別情報、セキュリティ、解析、品質改善のための操作ログ等。",
        "サポート：お問い合わせ内容、添付ファイル、及び当該対応に必要なメールのヘッダ等。",
        "決済等（有償の機能等を当社が提供し、当該決済等が発生する場合に限る。）：決済事業者が保持する取引ID、代金回収先情報、及び当該取引の成否。クレジットカードの番号そのものの全部を当社が恒常的に保持することは、委託先の方針及び当社の設計上、行いません。",
      ],
    },
    {
      anchorId: "pp-3",
      heading: "4. 利用目的",
      paragraphs: [
        "当社は、取得した個人データ等を、次の各号の目的（以下「利用目的」といいます。）の範囲内で利用します。利用目的の達成に必要な範囲を超えた取扱い（いわゆる目的外利用）は、法令上別段の扱いが認められない限り、事前行わず、又は、法令上必要とされる手続及び周知、同意等を行った上で行います。",
      ],
      listTitle: "利用目的",
      orderedList: true,
      listItems: [
        "本サービスのアカウント登録、本人確認、提供、品質保持、不具合対応、セキュリティ確保、不正利用の防止。",
        "利用者からのお問い合わせ、重要な変更、法令に基づき必要な事項の周知。マーケティングにあたる連絡は、取得に際して行うオプトイン、あらかじめの公表、又は、法令上許容される方法に従います。",
        "本サービス又は、個人を識別できない形に加工した上での統計データの作成、新機能、性能及び導線の改善。",
        "契約、利用規約、法令、裁判所、行政機関からの要請、又は、当社の法的権利の行使及び紛争対応。",
      ],
    },
    {
      anchorId: "pp-4",
      heading: "5. 利用目的の変更",
      paragraphs: [
        "当社は、変更前の利用目的に関連性を有すると合理的に認められる範囲で、利用目的を変更する場合があります。当該変更に際して、法令上、公表、通知、又は、同意等が要されるときは、個人情報保護法及び他の関係法令に従います。",
      ],
    },
    {
      anchorId: "pp-5",
      heading: "6. 第三者提供、国外移転、委託",
      paragraphs: [
        "当社は、個人データ等を、販売目的で第三者に提供しません。第三者に提供する（委託を除きます。）にあたっては、個人情報保護法上、同意を得ることその他、法令で定められた事項、記録、開示、又は、あらかじめ公表、通知等、必要とされる全ての手続を行います。国外にある第三者に提供し、又は、国外のサーバ等に保存し得る場合は、個人情報保護法第28条、第32条、及び、これに関連する手続、同意、契約、又は、個人情報保護委員会の認定等、法令が求める保護水準及び手続に従います。当社は、前項の他、業務の全部又は一部の委託に伴い、委託先に個人データ等を取り扱わせる場合があります。この場合、当社は、委託先の選定、秘密保持、再委託、事故時の報告、監査、破棄等、法令及び、ガイドライン上要求される事項のうえ、委託契約その他、必要とされる監督を行います。",
      ],
    },
    {
      anchorId: "pp-6",
      heading: "7. 匿名加工情報、仮名加工情報",
      paragraphs: [
        "当社が、匿名加工情報又は仮名加工情報を取り扱う場合、個人情報保護法、及び、関係政省令、ガイドラインに従い、定義、安全管理措置、第三者提供、再識別の禁止、公表、苦情、開示、保管、又は、委託等、法令が求める事項の全てに対応します。取り扱いがない間は、本項の適用を除き、本ポリシーの他の条項のとおり、個人データ等を扱います。",
      ],
    },
    {
      anchorId: "pp-7",
      heading: "8. 安全管理措置",
      paragraphs: [
        "当社は、取り扱う個人データの漏えい、滅失、毀損、又は、き損、及び、個人データの安全の管理その他の個人データの取扱いのために必要な措置として、次の事項、並びに、個人情報保護法及び、ガイドラインで求められる措置、を講じます。措置の内容、レベルは、事業の規模、取り扱う個人データの性質、取扱事態、及び、内外の情勢に応じ、定期的、又は、必要に応じ、見直します。",
      ],
      listTitle: "主な例",
      listItems: [
        "社内規程の整備、職制上の明確化、従事者及び、委託先に対する教育、秘密保持。",
        "入退、機器、媒体の管理、盗難、紛失、悪用等に対する物理的、技術的制御。",
        "アクセス制御、認証、不正ソフト、不正接続、脆弱性、第三者からの攻撃、誤消去、等への対策、及び、把握した場合、委員会への報告、及び、皆様への影響、通知等。",
        "上記、並びに、事業、システム、組織の変更に合わせた、必要とされる、追加的措置。",
      ],
    },
    {
      anchorId: "pp-8",
      heading: "9. 保有個人データ等の開示、訂正、利用の停止、第三者提供の記録の開示等",
      paragraphs: [
        "利用者は、当社が、個人情報保護法、及び、本ポリシーに従い、手続、本人確認、手数料等を、別途定め、公表、又は、個別に示す、方法、により、開示、訂正、追加、削除、利用の停止、消去、第三者提供の停止、及び、第三者提供の記録の開示、を求めることができます。当社は、法令上、全て、又は、一部、に応じない合理的な根拠がある場合を除き、遅滞なく、対応します。法令上、応じない場合、又は、一部に応じる場合は、その旨、及び、理由、を示します。",
      ],
    },
    {
      anchorId: "pp-9",
      heading: "10. クッキー等、第三者サービス、リンク",
      paragraphs: [
        "本サービスが本サービス外の第三者のウェブサイト、広告、SNS プラグイン、解析、決済等と利用者が接続し得る場合、当該第三者の利用規約及びプライバシーポリシーが適用されます。当社が、本サービス上で解析又は広告のためのタグ、SDK、クッキー等を用いる場合、当該内容、及び、オプトアウト等を分かりやすく掲示し、法令に従い同意を得る等の手続を行います。利用者は、本サービス上の設定又はブラウザ、OS 等の設定により、当該利用を制限又は拒否し得る場合がありますが、本サービスの全部又は一部が利用できなくなる場合があります。",
      ],
    },
    {
      anchorId: "pp-10",
      heading: "11. 本ポリシーの変更",
      paragraphs: [
        "当社は、法令の制定・改廃、本サービスの内容の変更、又は、その他の事由に伴い、本ポリシーを随時改定する場合があります。改定後の本ポリシーは、本サービス上に掲示した日から効力を生じ、又は、法令上必要な場合、当社が所定の方法で周知、通知、若しくは同意を得た上で、効力を生じます。掲示後に本サービスを利用した利用者は、改定に同意したものとみなすことがあります。",
      ],
    },
  ],
};

const byLocale: Record<AppLocale, LegalDocumentWithIntro> = {
  en: privacyPolicyEn,
  ja: privacyPolicyJa,
};

export function getPrivacyPolicyContent(
  locale: string | undefined,
): LegalDocumentWithIntro {
  if (locale === "en" || locale === "ja") {
    return byLocale[locale];
  }
  return byLocale.ja;
}
