//
//  DeviceModule.m
//  AlamiAdibTS
//
//  Created by Adib on 14/08/22.
//

#import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(DeviceModule,NSObject)

RCT_EXTERN_METHOD(getDeviceName: (RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(getDeviceId: (RCTResponseSenderBlock)callbak)

@end

