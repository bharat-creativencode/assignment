#include <nan.h>

NAN_METHOD(Factorial) {
    if (!info[0]->IsNumber()) {
        Nan::ThrowTypeError("argument must be a number!");
        return;
    }
    
    int number = (int) info[0]->NumberValue();
    double factorial = 1;

    for (int i = 1; i <= number; ++i) {
        factorial *= i;
    }
    
    info.GetReturnValue().Set(factorial);
}

NAN_MODULE_INIT(Initialize) {
    NAN_EXPORT(target, Factorial);
}

NODE_MODULE(addon, Initialize);