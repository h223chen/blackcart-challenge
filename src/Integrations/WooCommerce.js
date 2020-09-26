const BaseIntegration = require("./BaseIntegration");

/**
 * WooCommerce integration class
 *
 * Communicates with WooCommerce API and returns WooCommerce data
 * ASSUMPTIONS: not going to worry about stuff like authentication
 * and API keys
 */
class WooCommerce extends BaseIntegration {
  constructor() {
    super();
  }

  /**
   * fake product return values from WooCommerce docs
   */
  __getFakeProducts() {
    return [
      {
        id: 799,
        name: "Ship Your Idea",
        slug: "ship-your-idea-22",
        permalink: "https://example.com/product/ship-your-idea-22/",
        date_created: "2017-03-23T17:03:12",
        date_created_gmt: "2017-03-23T20:03:12",
        date_modified: "2017-03-23T17:03:12",
        date_modified_gmt: "2017-03-23T20:03:12",
        type: "variable",
        status: "publish",
        featured: false,
        catalog_visibility: "visible",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        short_description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n",
        sku: "",
        price: "",
        regular_price: "",
        sale_price: "",
        date_on_sale_from: null,
        date_on_sale_from_gmt: null,
        date_on_sale_to: null,
        date_on_sale_to_gmt: null,
        price_html: "",
        on_sale: false,
        purchasable: false,
        total_sales: 0,
        virtual: false,
        downloadable: false,
        downloads: [],
        download_limit: -1,
        download_expiry: -1,
        external_url: "",
        button_text: "",
        tax_status: "taxable",
        tax_class: "",
        manage_stock: false,
        stock_quantity: null,
        stock_status: "instock",
        backorders: "no",
        backorders_allowed: false,
        backordered: false,
        sold_individually: false,
        weight: "",
        dimensions: {
          length: "",
          width: "",
          height: "",
        },
        shipping_required: true,
        shipping_taxable: true,
        shipping_class: "",
        shipping_class_id: 0,
        reviews_allowed: true,
        average_rating: "0.00",
        rating_count: 0,
        related_ids: [31, 22, 369, 414, 56],
        upsell_ids: [],
        cross_sell_ids: [],
        parent_id: 0,
        purchase_note: "",
        categories: [
          {
            id: 9,
            name: "Clothing",
            slug: "clothing",
          },
          {
            id: 14,
            name: "T-shirts",
            slug: "t-shirts",
          },
        ],
        tags: [],
        images: [
          {
            id: 795,
            date_created: "2017-03-23T14:03:08",
            date_created_gmt: "2017-03-23T20:03:08",
            date_modified: "2017-03-23T14:03:08",
            date_modified_gmt: "2017-03-23T20:03:08",
            src:
              "https://example.com/wp-content/uploads/2017/03/T_4_front-11.jpg",
            name: "",
            alt: "",
          },
          {
            id: 796,
            date_created: "2017-03-23T14:03:09",
            date_created_gmt: "2017-03-23T20:03:09",
            date_modified: "2017-03-23T14:03:09",
            date_modified_gmt: "2017-03-23T20:03:09",
            src:
              "https://example.com/wp-content/uploads/2017/03/T_4_back-10.jpg",
            name: "",
            alt: "",
          },
          {
            id: 797,
            date_created: "2017-03-23T14:03:10",
            date_created_gmt: "2017-03-23T20:03:10",
            date_modified: "2017-03-23T14:03:10",
            date_modified_gmt: "2017-03-23T20:03:10",
            src:
              "https://example.com/wp-content/uploads/2017/03/T_3_front-10.jpg",
            name: "",
            alt: "",
          },
          {
            id: 798,
            date_created: "2017-03-23T14:03:11",
            date_created_gmt: "2017-03-23T20:03:11",
            date_modified: "2017-03-23T14:03:11",
            date_modified_gmt: "2017-03-23T20:03:11",
            src:
              "https://example.com/wp-content/uploads/2017/03/T_3_back-10.jpg",
            name: "",
            alt: "",
          },
        ],
        attributes: [
          {
            id: 6,
            name: "Color",
            position: 0,
            visible: false,
            variation: true,
            options: ["Black", "Green"],
          },
          {
            id: 0,
            name: "Size",
            position: 0,
            visible: true,
            variation: true,
            options: ["S", "M"],
          },
        ],
        default_attributes: [],
        variations: [
          {
            id: 733,
            date_created: "2017-03-23T00:53:11",
            date_created_gmt: "2017-03-23T03:53:11",
            date_modified: "2017-03-23T00:53:11",
            date_modified_gmt: "2017-03-23T03:53:11",
            description: "",
            permalink:
              "https://example.com/product/ship-your-idea/?attribute_pa_color=green",
            sku: "",
            price: "9.00",
            regular_price: "9.00",
            sale_price: "",
            date_on_sale_from: null,
            date_on_sale_from_gmt: null,
            date_on_sale_to: null,
            date_on_sale_to_gmt: null,
            on_sale: false,
            status: "publish",
            purchasable: true,
            virtual: false,
            downloadable: false,
            downloads: [],
            download_limit: -1,
            download_expiry: -1,
            tax_status: "taxable",
            tax_class: "",
            manage_stock: false,
            stock_quantity: null,
            stock_status: "instock",
            backorders: "no",
            backorders_allowed: false,
            backordered: false,
            weight: "",
            dimensions: {
              length: "",
              width: "",
              height: "",
            },
            shipping_class: "",
            shipping_class_id: 0,
            image: {
              id: 425,
              date_created: "2016-10-19T12:21:16",
              date_created_gmt: "2016-10-19T16:21:16",
              date_modified: "2016-10-19T12:21:16",
              date_modified_gmt: "2016-10-19T16:21:16",
              src:
                "https://example.com/wp-content/uploads/2016/10/T_3_front-12.jpg",
              name: "",
              alt: "",
            },
            attributes: [
              {
                id: 6,
                name: "Color",
                option: "Green",
              },
            ],
            menu_order: 0,
            meta_data: [],
            _links: {
              self: [
                {
                  href:
                    "https://example.com/wp-json/wc/v3/products/22/variations/733",
                },
              ],
              collection: [
                {
                  href:
                    "https://example.com/wp-json/wc/v3/products/22/variations",
                },
              ],
              up: [
                {
                  href: "https://example.com/wp-json/wc/v3/products/22",
                },
              ],
            },
          },
          {
            id: 732,
            date_created: "2017-03-23T00:36:38",
            date_created_gmt: "2017-03-23T03:36:38",
            date_modified: "2017-03-23T00:36:38",
            date_modified_gmt: "2017-03-23T03:36:38",
            description: "",
            permalink:
              "https://example.com/product/ship-your-idea/?attribute_pa_color=black",
            sku: "",
            price: "9.00",
            regular_price: "9.00",
            sale_price: "",
            date_on_sale_from: null,
            date_on_sale_from_gmt: null,
            date_on_sale_to: null,
            date_on_sale_to_gmt: null,
            on_sale: false,
            status: "publish",
            purchasable: true,
            virtual: false,
            downloadable: false,
            downloads: [],
            download_limit: -1,
            download_expiry: -1,
            tax_status: "taxable",
            tax_class: "",
            manage_stock: false,
            stock_quantity: null,
            stock_status: "instock",
            backorders: "no",
            backorders_allowed: false,
            backordered: false,
            weight: "",
            dimensions: {
              length: "",
              width: "",
              height: "",
            },
            shipping_class: "",
            shipping_class_id: 0,
            image: {
              id: 423,
              date_created: "2016-10-19T12:21:14",
              date_created_gmt: "2016-10-19T16:21:14",
              date_modified: "2016-10-19T12:21:14",
              date_modified_gmt: "2016-10-19T16:21:14",
              src:
                "https://example.com/wp-content/uploads/2016/10/T_4_front-12.jpg",
              name: "",
              alt: "",
            },
            attributes: [
              {
                id: 6,
                name: "Color",
                option: "Black",
              },
            ],
            menu_order: 0,
            meta_data: [],
            _links: {
              self: [
                {
                  href:
                    "https://example.com/wp-json/wc/v3/products/22/variations/732",
                },
              ],
              collection: [
                {
                  href:
                    "https://example.com/wp-json/wc/v3/products/22/variations",
                },
              ],
              up: [
                {
                  href: "https://example.com/wp-json/wc/v3/products/22",
                },
              ],
            },
          },
        ],
        grouped_products: [],
        menu_order: 0,
        meta_data: [],
        _links: {
          self: [
            {
              href: "https://example.com/wp-json/wc/v3/products/799",
            },
          ],
          collection: [
            {
              href: "https://example.com/wp-json/wc/v3/products",
            },
          ],
        },
      },
      {
        id: 794,
        name: "Premium Quality",
        slug: "premium-quality-19",
        permalink: "https://example.com/product/premium-quality-19/",
        date_created: "2017-03-23T17:01:14",
        date_created_gmt: "2017-03-23T20:01:14",
        date_modified: "2017-03-23T17:01:14",
        date_modified_gmt: "2017-03-23T20:01:14",
        type: "simple",
        status: "publish",
        featured: false,
        catalog_visibility: "visible",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        short_description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n",
        sku: "",
        price: "21.99",
        regular_price: "21.99",
        sale_price: "",
        date_on_sale_from: null,
        date_on_sale_from_gmt: null,
        date_on_sale_to: null,
        date_on_sale_to_gmt: null,
        price_html:
          '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#36;</span>21.99</span>',
        on_sale: false,
        purchasable: true,
        total_sales: 0,
        virtual: false,
        downloadable: false,
        downloads: [],
        download_limit: -1,
        download_expiry: -1,
        external_url: "",
        button_text: "",
        tax_status: "taxable",
        tax_class: "",
        manage_stock: false,
        stock_quantity: null,
        stock_status: "instock",
        backorders: "no",
        backorders_allowed: false,
        backordered: false,
        sold_individually: false,
        weight: "",
        dimensions: {
          length: "",
          width: "",
          height: "",
        },
        shipping_required: true,
        shipping_taxable: true,
        shipping_class: "",
        shipping_class_id: 0,
        reviews_allowed: true,
        average_rating: "0.00",
        rating_count: 0,
        related_ids: [463, 47, 31, 387, 458],
        upsell_ids: [],
        cross_sell_ids: [],
        parent_id: 0,
        purchase_note: "",
        categories: [
          {
            id: 9,
            name: "Clothing",
            slug: "clothing",
          },
          {
            id: 14,
            name: "T-shirts",
            slug: "t-shirts",
          },
        ],
        tags: [],
        images: [
          {
            id: 792,
            date_created: "2017-03-23T14:01:13",
            date_created_gmt: "2017-03-23T20:01:13",
            date_modified: "2017-03-23T14:01:13",
            date_modified_gmt: "2017-03-23T20:01:13",
            src:
              "https://example.com/wp-content/uploads/2017/03/T_2_front-4.jpg",
            name: "",
            alt: "",
          },
          {
            id: 793,
            date_created: "2017-03-23T14:01:14",
            date_created_gmt: "2017-03-23T20:01:14",
            date_modified: "2017-03-23T14:01:14",
            date_modified_gmt: "2017-03-23T20:01:14",
            src:
              "https://example.com/wp-content/uploads/2017/03/T_2_back-2.jpg",
            name: "",
            alt: "",
          },
        ],
        attributes: [],
        default_attributes: [
          {
            id: 6,
            name: "Color",
            option: "black",
          },
          {
            id: 0,
            name: "Size",
            option: "S",
          },
        ],
        variations: [],
        grouped_products: [],
        menu_order: 0,
        meta_data: [],
        _links: {
          self: [
            {
              href: "https://example.com/wp-json/wc/v3/products/794",
            },
          ],
          collection: [
            {
              href: "https://example.com/wp-json/wc/v3/products",
            },
          ],
        },
      },
    ];
  }
  /**
   * fake settings return values from WooCommerce docs
   */
  __getFakeSettings() {
    return {
      environment: {
        home_url: "http://example.com",
        site_url: "http://example.com",
        version: "3.0.0",
        log_directory: "/var/www/woocommerce/wp-content/uploads/wc-logs/",
        log_directory_writable: true,
        wp_version: "4.7.3",
        wp_multisite: false,
        wp_memory_limit: 134217728,
        wp_debug_mode: true,
        wp_cron: true,
        language: "en_US",
        server_info: "Apache/2.4.18 (Ubuntu)",
        php_version: "7.1.3-2+deb.sury.org~yakkety+1",
        php_post_max_size: 8388608,
        php_max_execution_time: 30,
        php_max_input_vars: 1000,
        curl_version: "7.50.1, OpenSSL/1.0.2g",
        suhosin_installed: false,
        max_upload_size: 2097152,
        mysql_version: "5.7.17",
        default_timezone: "UTC",
        fsockopen_or_curl_enabled: true,
        soapclient_enabled: true,
        domdocument_enabled: true,
        gzip_enabled: true,
        mbstring_enabled: true,
        remote_post_successful: true,
        remote_post_response: "200",
        remote_get_successful: true,
        remote_get_response: "200",
      },
      database: {
        wc_database_version: "3.0.0",
        database_prefix: "wp_",
        maxmind_geoip_database:
          "/var/www/woocommerce/wp-content/uploads/GeoIP.dat",
        database_tables: {
          woocommerce_sessions: true,
          woocommerce_api_keys: true,
          woocommerce_attribute_taxonomies: true,
          woocommerce_downloadable_product_permissions: true,
          woocommerce_order_items: true,
          woocommerce_order_itemmeta: true,
          woocommerce_tax_rates: true,
          woocommerce_tax_rate_locations: true,
          woocommerce_shipping_zones: true,
          woocommerce_shipping_zone_locations: true,
          woocommerce_shipping_zone_methods: true,
          woocommerce_payment_tokens: true,
          woocommerce_payment_tokenmeta: true,
        },
      },
      active_plugins: [
        {
          plugin: "woocommerce/woocommerce.php",
          name: "WooCommerce",
          version: "3.0.0-rc.1",
          version_latest: "2.6.14",
          url: "https://woocommerce.com/",
          author_name: "Automattic",
          author_url: "https://woocommerce.com",
          network_activated: false,
        },
      ],
      theme: {
        name: "Twenty Sixteen",
        version: "1.3",
        version_latest: "1.3",
        author_url: "https://wordpress.org/",
        is_child_theme: false,
        has_woocommerce_support: true,
        has_woocommerce_file: false,
        has_outdated_templates: false,
        overrides: [],
        parent_name: "",
        parent_version: "",
        parent_version_latest: "",
        parent_author_url: "",
      },
      settings: {
        api_enabled: true,
        force_ssl: false,
        currency: "USD",
        currency_symbol: "&#36;",
        currency_position: "left",
        thousand_separator: ",",
        decimal_separator: ".",
        number_of_decimals: 2,
        geolocation_enabled: false,
        taxonomies: {
          external: "external",
          grouped: "grouped",
          simple: "simple",
          variable: "variable",
        },
      },
      security: {
        secure_connection: true,
        hide_errors: true,
      },
      pages: [
        {
          page_name: "Shop base",
          page_id: "4",
          page_set: true,
          page_exists: true,
          page_visible: true,
          shortcode: "",
          shortcode_required: false,
          shortcode_present: false,
        },
        {
          page_name: "Cart",
          page_id: "5",
          page_set: true,
          page_exists: true,
          page_visible: true,
          shortcode: "[woocommerce_cart]",
          shortcode_required: true,
          shortcode_present: true,
        },
        {
          page_name: "Checkout",
          page_id: "6",
          page_set: true,
          page_exists: true,
          page_visible: true,
          shortcode: "[woocommerce_checkout]",
          shortcode_required: true,
          shortcode_present: true,
        },
        {
          page_name: "My account",
          page_id: "7",
          page_set: true,
          page_exists: true,
          page_visible: true,
          shortcode: "[woocommerce_my_account]",
          shortcode_required: true,
          shortcode_present: true,
        },
      ],
    };
  }
  /**
   * fake country settings return values from WooCommerce docs
   */
  __getFakeCountrySettings() {
    return {
      code: "BE",
      name: "Belgium",
      currency_code: "EUR",
      currency_pos: "left",
      decimal_sep: ",",
      dimension_unit: "cm",
      num_decimals: 2,
      thousand_sep: " ",
      weight_unit: "kg",
      states: [],
    };
  }

  /**
   * get current currency settings
   */
  __getFakeCurrencySetting() {
    return this.__getFakeSettings().settings.currency;
  }

  /**
   * get current weight unit settings
   */
  __getFakeWeightSetting() {
    return this.__getFakeCountrySettings().weight_unit;
  }

  /**
   * @override
   * @param {Array} products
   */
  __normalize(products) {
    return products.map((product) => {
      let p = {
        id: product.id,
        name: product.name,
        inventory: product.variations.reduce((acc, variant) => {
          return acc + (variant.stock_quantity || 0);
        }, 0),
        variations: product.variations.map((variant) => {
          let v = {
            weight: {
              amount: variant.weight,
              unit: this.__getFakeWeightSetting(),
            },
            inventory: variant.stock_quantity || 0,
            prices: [
              {
                price: variant.price,
                currency: this.__getFakeCurrencySetting(),
              },
            ],
          };

          variant.attributes.forEach((attribute, i) => {
            v["option" + (i + 1)] = attribute.option;
          });
          return v;
        }),
      };

      return p;
    });
  }
  /**
   * @override
   * faking the return value, you'd just call the products
   * endpoint for WooCommerce
   */
  getProducts() {
    return this.__normalize(this.__getFakeProducts());
  }
}

module.exports = WooCommerce;
