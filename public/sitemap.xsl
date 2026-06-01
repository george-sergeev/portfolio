<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>My Sitemap</title>
            </head>
            <body>
                <h1>Sitemap</h1>
                <ul>
                    <xsl:for-each select="urlset/url">
                        <li>
                            <a href="{loc}">
                                <xsl:value-of select="loc" />
                            </a>
                            <br />
                            <small>Last modified: <xsl:value-of select="lastmod" /></small>
                        </li>
                    </xsl:for-each>
                </ul>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
