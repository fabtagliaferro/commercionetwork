// DONTCOVER
// nolint
package v1_2_0

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
)

const (
	ModuleName = "docs"
)

// ---------------
// --- Genesis
// ---------------

// v1.2.0 docs genesis state
type GenesisState struct {
	UsersData                      []UserDocumentsData `json:"users_data"`
	SupportedMetadataSchemes       []MetadataSchema    `json:"supported_metadata_schemes"`
	TrustedMetadataSchemaProposers []sdk.AccAddress    `json:"trusted_metadata_schema_proposers"`
}

type UserDocumentsData struct {
	User              sdk.AccAddress    `json:"user"`
	SentDocuments     []Document        `json:"sent_documents"`
	ReceivedDocuments []Document        `json:"received_documents"`
	SentReceipts      []DocumentReceipt `json:"sent_receipts"`
	ReceivedReceipts  []DocumentReceipt `json:"received_receipts"`
}

// -----------------
// --- Document
// -----------------

type Document struct {
	UUID           string                  `json:"uuid"`
	Metadata       DocumentMetadata        `json:"metadata"`
	ContentURI     string                  `json:"content_uri"`     // Optional
	Checksum       *DocumentChecksum       `json:"checksum"`        // Optional
	EncryptionData *DocumentEncryptionData `json:"encryption_data"` // Optional
}

type DocumentMetadata struct {
	ContentURI string                  `json:"content_uri"`
	SchemaType string                  `json:"schema_type"` // Optional - Either this or schema must be defined
	Schema     *DocumentMetadataSchema `json:"schema"`      // Optional - Either this or schema_type must be defined
}

type DocumentMetadataSchema struct {
	URI     string `json:"uri"`
	Version string `json:"version"`
}

type DocumentChecksum struct {
	Value     string `json:"value"`
	Algorithm string `json:"algorithm"`
}

type DocumentEncryptionData struct {
	Keys          []DocumentEncryptionKey `json:"keys"`           // contains the keys used to encrypt the data
	EncryptedData []string                `json:"encrypted_data"` // contains the list of data that have been encrypted
}

type DocumentEncryptionKey struct {
	Recipient sdk.AccAddress `json:"recipient"` // Recipient that should use this data
	Value     string         `json:"value"`     // Value of the key that should be used. This is encrypted with the recipient's public key
}

// ----------------------
// --- Document receipt
// ---------------------

type DocumentReceipt struct {
	Sender       sdk.AccAddress `json:"sender"`
	Recipient    sdk.AccAddress `json:"recipient"`
	TxHash       string         `json:"tx_hash"`
	DocumentUUID string         `json:"document_uuid"`
	Proof        string         `json:"proof"`
}

// ------------------------
// --- Metadata schemes
// -------------------------

type MetadataSchema struct {
	Type      string `json:"type"`
	SchemaURI string `json:"schema_uri"`
	Version   string `json:"version"`
}
