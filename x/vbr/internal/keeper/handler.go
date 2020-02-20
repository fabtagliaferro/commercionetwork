package keeper

import (
	"fmt"

	"github.com/commercionetwork/commercionetwork/x/vbr/internal/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func NewHandler(keeper Keeper) sdk.Handler {
	return func(ctx sdk.Context, msg sdk.Msg) sdk.Result {
		switch msg := msg.(type) {
		case types.MsgIncrementBlockRewardsPool:
			return handleMsgIncrementBlockRewardsPool(ctx, keeper, msg)
		default:
			errMsg := fmt.Sprintf("Unrecognized %s message type: %v", types.ModuleName, msg.Type())
			return sdk.ErrUnknownRequest(errMsg).Result()
		}
	}
}

func handleMsgIncrementBlockRewardsPool(ctx sdk.Context, k Keeper, msg types.MsgIncrementBlockRewardsPool) sdk.Result {
	// Subtract the coins from the account
	if err := k.supplyKeeper.SendCoinsFromAccountToModule(ctx, msg.Funder, types.ModuleName, msg.Amount); err != nil {
		return err.Result()
	}

	// Set the total rewards pool
	k.SetTotalRewardPool(ctx, k.GetTotalRewardPool(ctx).Add(sdk.NewDecCoins(msg.Amount)))

	return sdk.Result{}
}